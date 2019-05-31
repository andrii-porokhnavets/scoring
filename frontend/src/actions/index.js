import { TEST } from '../constants/action-types';

export function test(payload) {
    return { type: TEST, payload };
}
