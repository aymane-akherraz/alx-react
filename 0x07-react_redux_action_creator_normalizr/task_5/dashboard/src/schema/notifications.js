import data from '../../notifications.json'
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: 'guid'});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

export const normalizedData = normalize(data, [notification]);

const getAllNotificationsByUser = (userId) => {
  const contextList = []
  normalizedData.result.forEach((e) => {
    if (normalizedData.entities.notifications[e].author === userId) {
      contextList.push(normalizedData.entities.messages[normalizedData.entities.notifications[e].context])
    }
  })
  return contextList;
}

export default getAllNotificationsByUser;
