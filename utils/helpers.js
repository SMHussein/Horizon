import json from '@messages/en.json';

export function getItems(t, jsonPath) {
    const keys = jsonPath.split('.');
    const roleLength = keys.reduce((obj, key) => obj && obj[key], json).length;
    const roleType = jsonPath.split('.').slice(1).join('.');

    return Array.from({ length: roleLength }, (_, i) => t(`${roleType}.${i}`));
}
