// This file is auto-generated by @hey-api/openapi-ts

import type { GetFooResponse } from './types.gen';

export const getFooResponseTransformer = async (data: any): Promise<GetFooResponse> => {
    data.foo = data.foo.map((item: any) => {
        item.baz = new Date(item.baz);
        return item;
    });
    return data;
};