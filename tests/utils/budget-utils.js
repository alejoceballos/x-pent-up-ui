import { BudgetItemType } from 'x-pent-up-ui/models/budget-item';
import moment from "moment";

const today = moment();

export class BudgetUtils {
  static firstCategoryName = 'Category 1';
  static secondCategoryName = 'Category 2';

  static baseItem = {
    budgetedDate: moment(today).toDate(),
    actualDate: moment(today).add(1, 'days').toDate(),
  };

  static expenseItem = { ...BudgetUtils.baseItem, type: BudgetItemType.EXPENSE };

  static firstCategoryExpenses = [
    { ...BudgetUtils.expenseItem, budgetedValue: 1, actualValue: 2 },
    { ...BudgetUtils.expenseItem, budgetedValue: 3, actualValue: 4 },
    { ...BudgetUtils.expenseItem, budgetedValue: 5, actualValue: 6 }
  ];

  static secondCategoryExpenses = [
    { ...BudgetUtils.expenseItem, budgetedValue: 7, actualValue: 8 }
  ];

  static budgetExpenses = [ ...BudgetUtils.firstCategoryExpenses, ...BudgetUtils.secondCategoryExpenses ];

  static incomeItem = { ...BudgetUtils.baseItem, type: BudgetItemType.INCOME };

  static firstCategoryIncomes = [
    { ...BudgetUtils.incomeItem, budgetedValue: 9, actualValue: 10 },
    { ...BudgetUtils.incomeItem, budgetedValue: 11, actualValue: 12 },
    { ...BudgetUtils.incomeItem, budgetedValue: 13, actualValue: 14 }
  ];

  static secondCategoryIncomes = [
    { ...BudgetUtils.incomeItem, budgetedValue: 15, actualValue: 16 }
  ];

  static budgetIncomes = [
    ...BudgetUtils.firstCategoryIncomes,
    ...BudgetUtils.secondCategoryIncomes
  ];

  static firstCategoryItemsSize = BudgetUtils.firstCategoryExpenses.length + BudgetUtils.firstCategoryIncomes.length;

  static budgetItemsSize = BudgetUtils.budgetExpenses.length + BudgetUtils.budgetIncomes.length;
}
