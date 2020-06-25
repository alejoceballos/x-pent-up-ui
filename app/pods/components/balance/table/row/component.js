import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';

export default class BalanceTableRowComponent extends Component {
    @tracked
    isSummaryVisible = false;

    @action
    toggleSummary() {
        this.isSummaryVisible = !this.isSummaryVisible;
    }
}
