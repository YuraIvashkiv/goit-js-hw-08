import throttle from 'lodash.throttle';
import { refs } from "./refs";
import storage from "./storage";

let feedbackEl = {};
const LOCAL_KEY = "feedback-form-state";

refs.form.addEventListener('input', throttle(onSaveForm, 500));
refs.form.addEventListener('submit', onSendForm);

function onSaveForm({ target }) {
  const { name, value } = target
  
  feedbackEl[name] = value  
 storage.save(LOCAL_KEY, feedbackEl)
};

function loadFeedback() {
  const savedFeedback = storage.load(LOCAL_KEY);
  if (savedFeedback) {
    for (let el in savedFeedback) {
      refs.form[el].value = savedFeedback[el];
      feedbackEl[el]= savedFeedback[el]
  }
}
};
loadFeedback()

function onSendForm(event) {
  event.preventDefault();

  if (!feedbackEl.email || !feedbackEl.message) {
    alert('Заповніть усі поля');
    return
  } 
 

  const markup = ` `
  refs.form.reset();
  feedbackEl = {};
storage.remove(LOCAL_KEY)

}