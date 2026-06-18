from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import models
import schemas

from auth import get_current_user
from database import get_db

router = APIRouter()


@router.post("/budget")
def add_budget(
        budget: schemas.BudgetCreate,
        db: Session = Depends(get_db),
        current_user: models.User = Depends(get_current_user)):

    existing_budget = db.query(
        models.Budget
    ).filter(
        models.Budget.user_id == current_user.id
    ).first()

    if existing_budget:

        existing_budget.monthly_limit = budget.monthly_limit

    else:

        new_budget = models.Budget(
            monthly_limit=budget.monthly_limit,
            user_id=current_user.id
        )

        db.add(new_budget)

    db.commit()

    return {"message": "Budget saved successfully"}