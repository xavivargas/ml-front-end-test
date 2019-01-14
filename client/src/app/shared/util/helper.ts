import { Price } from '../models/item.model';

export class Helper {
    static formatPrice(price: Price) {
        let currency = '';
        currency = (price.currency === 'ARS' ? '$' : '$'); // Implementar lista de simbolos por currency
        const valueFomat = this.formatNumber(price.amount);
        return `${currency}  ${valueFomat}`;
    }

    static formatNumber(value: number) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
}
