"""Create phone number for user column

Revision ID: 9e3b45fc2f5c
Revises: 
Create Date: 2025-09-08 15:49:04.873748

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9e3b45fc2f5c'
down_revision: Union[str, Sequence[str], None] = None 
depends_on: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.add_column('users', sa.Column('phone_number', sa.String(), nullable=True))


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_column('users', 'phone_number')
