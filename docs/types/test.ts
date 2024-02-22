/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import dcumin = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin( x.length, x, 1, y, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin( '10', x, 1, y, 1 ); // $ExpectError
	dcumin( true, x, 1, y, 1 ); // $ExpectError
	dcumin( false, x, 1, y, 1 ); // $ExpectError
	dcumin( null, x, 1, y, 1 ); // $ExpectError
	dcumin( undefined, x, 1, y, 1 ); // $ExpectError
	dcumin( [], x, 1, y, 1 ); // $ExpectError
	dcumin( {}, x, 1, y, 1 ); // $ExpectError
	dcumin( ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin( x.length, 10, 1, y, 1 ); // $ExpectError
	dcumin( x.length, '10', 1, y, 1 ); // $ExpectError
	dcumin( x.length, true, 1, y, 1 ); // $ExpectError
	dcumin( x.length, false, 1, y, 1 ); // $ExpectError
	dcumin( x.length, null, 1, y, 1 ); // $ExpectError
	dcumin( x.length, undefined, 1, y, 1 ); // $ExpectError
	dcumin( x.length, [ '1' ], 1, y, 1 ); // $ExpectError
	dcumin( x.length, {}, 1, y, 1 ); // $ExpectError
	dcumin( x.length, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin( x.length, x, '10', y, 1 ); // $ExpectError
	dcumin( x.length, x, true, y, 1 ); // $ExpectError
	dcumin( x.length, x, false, y, 1 ); // $ExpectError
	dcumin( x.length, x, null, y, 1 ); // $ExpectError
	dcumin( x.length, x, undefined, y, 1 ); // $ExpectError
	dcumin( x.length, x, [], y, 1 ); // $ExpectError
	dcumin( x.length, x, {}, y, 1 ); // $ExpectError
	dcumin( x.length, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcumin( x.length, x, 1, 10, 1 ); // $ExpectError
	dcumin( x.length, x, 1, '10', 1 ); // $ExpectError
	dcumin( x.length, x, 1, true, 1 ); // $ExpectError
	dcumin( x.length, x, 1, false, 1 ); // $ExpectError
	dcumin( x.length, x, 1, null, 1 ); // $ExpectError
	dcumin( x.length, x, 1, undefined, 1 ); // $ExpectError
	dcumin( x.length, x, 1, [ '1' ], 1 ); // $ExpectError
	dcumin( x.length, x, 1, {}, 1 ); // $ExpectError
	dcumin( x.length, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin( x.length, x, 1, y, '10' ); // $ExpectError
	dcumin( x.length, x, 1, y, true ); // $ExpectError
	dcumin( x.length, x, 1, y, false ); // $ExpectError
	dcumin( x.length, x, 1, y, null ); // $ExpectError
	dcumin( x.length, x, 1, y, undefined ); // $ExpectError
	dcumin( x.length, x, 1, y, [] ); // $ExpectError
	dcumin( x.length, x, 1, y, {} ); // $ExpectError
	dcumin( x.length, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin(); // $ExpectError
	dcumin( x.length ); // $ExpectError
	dcumin( x.length, x ); // $ExpectError
	dcumin( x.length, x, 1 ); // $ExpectError
	dcumin( x.length, x, 1, y ); // $ExpectError
	dcumin( x.length, x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin.ndarray( '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( [], x, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin.ndarray( x.length, 10, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, '10', 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, true, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, false, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, null, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, {}, 1, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin.ndarray( x.length, x, '10', 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, undefined, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, [], 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin.ndarray( x.length, x, 1, '10', y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, undefined, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, [], y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcumin.ndarray( x.length, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, '10', 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin.ndarray( x.length, x, 1, 0, y, '10', 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, undefined, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, [], 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin.ndarray( x.length, x, 1, 0, y, 1, '10' ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, 1, undefined ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, 1, [] ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dcumin.ndarray(); // $ExpectError
	dcumin.ndarray( x.length ); // $ExpectError
	dcumin.ndarray( x.length, x ); // $ExpectError
	dcumin.ndarray( x.length, x, 1 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	dcumin.ndarray( x.length, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}
