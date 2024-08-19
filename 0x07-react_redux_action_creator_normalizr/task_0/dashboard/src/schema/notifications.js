import data from '../../notifications.json'

const getAllNotificationsByUser = (userId) => {
  return data.filter((e) => e.author.id == userId).map((e) => e.context);
}

export default getAllNotificationsByUser;
