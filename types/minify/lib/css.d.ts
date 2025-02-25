import type { Options } from './minify';

/**
 * minify css data.
 *
 * @param data
 * @param [userOptions] - (optional) object that may contain a `css` key with an object of options
 * @async
 */
export default function (data: string, userOptions?: Pick<Options, 'css'>): Promise<string>;
