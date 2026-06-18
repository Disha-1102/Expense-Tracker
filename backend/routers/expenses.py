from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from auth import get_current_user

import models
import schemas
from database import get_db

router = APIRouter()

@router.post("/expense")
@router.post("/expense")
def add_expense(
    expense: schemas.ExpenseCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):

    new_expense = models.Expense(
        category=expense.category,
        amount=expense.amount,
        description=expense.description,
        user_id=current_user.id
    )

    db.add(new_expense)
    db.commit()

    return {"message": "Expense added successfully"}

@router.get("/expenses")
def get_expenses(
        db: Session = Depends(get_db),
        current_user: models.User = Depends(get_current_user)):

    expenses = db.query(models.Expense).filter(
        models.Expense.user_id == current_user.id
    ).all()

    return expenses

@router.delete("/expense/{expense_id}")
def delete_expense(
    expense_id: int,
    db: Session = Depends(get_db)
):

    expense = db.query(models.Expense).filter(
        models.Expense.id == expense_id
    ).first()

    if not expense:
        return {"message": "Expense not found"}

    db.delete(expense)
    db.commit()

    return {"message": "Expense deleted successfully"}

@router.put("/expense/{expense_id}")
def update_expense(
        expense_id: int,
        updated_expense: schemas.ExpenseCreate,
        db: Session = Depends(get_db)):

    expense = db.query(models.Expense).filter(
        models.Expense.id == expense_id
    ).first()

    if not expense:
        return {"message": "Expense not found"}

    expense.category = updated_expense.category
    expense.amount = updated_expense.amount
    expense.description = updated_expense.description

    db.commit()

    return {"message": "Expense updated successfully"}