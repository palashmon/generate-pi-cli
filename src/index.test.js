import test from 'ava';
import execa from 'execa';

// PI value upto 200 decimal places
// Reference: http://www.math.com/tables/constants/pi.htm
const pi =
    '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196';

test.todo('Add more test cases later');

test('default', async t => {
    const { stdout } = await execa('./src/index.js');
    t.is(stdout, pi.slice(0, 50 + 2));
});

test('gen-pi 0 should be equal to 3', async t => {
    const { stdout } = await execa('./src/index.js', [0]);
    t.is(stdout, '3');
});

test('gen-pi 5 should be same as constant PI 5 decimal places value', async t => {
    const { stdout } = await execa('./src/index.js', [5]);
    t.is(stdout, pi.slice(0, 5 + 2));
});

test('gen-pi 50 should be same as constant PI 50 decimal places value', async t => {
    const { stdout } = await execa('./src/index.js', [50]);
    t.is(stdout, pi.slice(0, 50 + 2));
});

test('gen-pi 100 should be same as constant PI 100 decimal places value', async t => {
    const { stdout } = await execa('./src/index.js', [100]);
    t.is(stdout, pi.slice(0, 100 + 2));
});
