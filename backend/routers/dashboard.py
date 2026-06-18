from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

import models as models
from database import get_db
from auth import get_current_user

router = APIRouter()


@router.get("/dashboard")
def dashboard(
        db: Session = Depends(get_db),
        current_user: models.User = Depends(get_current_user)):

    total_expense = db.query(
        func.sum(models.Expense.amount)
    ).filter(
        models.Expense.user_id == current_user.id
    ).scalar()

    if total_expense is None:
        total_expense = 0

    expense_count = db.query(
        models.Expense
    ).filter(
        models.Expense.user_id == current_user.id
    ).count()

    budget = db.query(
        models.Budget
    ).filter(
        models.Budget.user_id == current_user.id
    ).first()

    monthly_budget = budget.monthly_limit if budget else 0

    remaining_budget = monthly_budget - total_expense

    return {
        "total_expense": total_expense,
        "monthly_budget": monthly_budget,
        "remaining_budget": remaining_budget,
        "expense_count": expense_count
    }