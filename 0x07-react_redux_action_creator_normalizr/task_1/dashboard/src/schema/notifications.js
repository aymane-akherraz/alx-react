import data from '../../notifications.json'
import { normalize, schema } from 'normalizr';

const getAllNotificationsByUser = (userId) => {
  return data.filter((e) => e.author.id == userId).map((e) => e.context);
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: 'guid'});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

export const normalizedData = normalize(data, [notification]);

export default getAllNotificationsByUser;
