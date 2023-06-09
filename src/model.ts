import { createStore, createEvent } from 'effector';
import { createForm } from 'effector-forms';
import { debug } from 'patronum';

export const buttonClicked = createEvent();

export const $counter = createStore(0);

$counter.on(buttonClicked, (counter) => counter + 1);

debug($counter);

createForm