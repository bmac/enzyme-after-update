# enzyme-after-update
> A helper for waiting for an update on an Enzyme ReactWrapper before performing an assertion.

## API

### afterUpdate(reactWrapper)
Returns a promise that waits for the provided
`reactWrapper` (an instance of an [Enzyme](https://github.com/airbnb/enzyme) [ReactWrapper](http://airbnb.io/enzyme/docs/api/mount.html) class) to call `componentDidUpdate`.

## Example
```js
const React = require('react');
const expect = require('chai').expect;
const mount = require('enzyme').mount;
const afterUpdate = require('enzyme-after-update');
const ActivateFrom = require('./active-form');

it('renders the errors after an unsuccessful save', function() {
  const record = {};
  const wrapper = mount(<ActivateFrom record={record} />);

  wrapper.find('button').simulate('click');

  return afterUpdate(wrapper).then(function() {
    expect(wrapper.find('.activate-form-error').text().trim()).to.equal('Error Message');
  });
});
```

## Release History

* 2016-10-28 - v1.0.0 - initial release
* 2016-10-31 - v1.1.0 - afterUpdate can now be used with non-root ReactWrappers.
