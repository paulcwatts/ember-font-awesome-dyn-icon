import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('dyn-icon', 'Integration | Component | dyn icon', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{dyn-icon}}`);
  assert.equal(find('[data-test-icon]').offsetWidth, 12);
});
