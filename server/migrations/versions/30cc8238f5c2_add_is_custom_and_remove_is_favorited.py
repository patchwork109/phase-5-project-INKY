"""Add is_custom and remove is_favorited

Revision ID: 30cc8238f5c2
Revises: 76b572129b83
Create Date: 2023-05-05 14:28:01.127781

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '30cc8238f5c2'
down_revision = '76b572129b83'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorites', schema=None) as batch_op:
        batch_op.drop_column('is_favorited')

    with op.batch_alter_table('tattoos', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_custom', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tattoos', schema=None) as batch_op:
        batch_op.drop_column('is_custom')

    with op.batch_alter_table('favorites', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_favorited', sa.BOOLEAN(), nullable=True))

    # ### end Alembic commands ###
