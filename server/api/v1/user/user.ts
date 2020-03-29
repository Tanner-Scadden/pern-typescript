import * as express from 'express';
import db from '../../../db';
import { Event, User } from '../../../serverTypes';
const router = express.Router();

const getAllUsers = async (req, res) => {
  try {
    const users: Array<User> = await db.models.User.findAll();
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

const createUser = async (req, res) => {
  try {
    const data: User = req.body;
    if (!data.first_name) {
      res.status(401).send('first_name is required');
    }
    if (!data.last_name) {
      res.status(401).send('last_name is required');
    }
    const event: Event = await db.models.User.create(data);
    res.status(200).send(event);
  } catch (e) {
    res.status(500).send(e);
  }
};

const updateUser = async (req, res) => {
  try {
    const data: User = req.body;
    const id: number = req.params.id;
    const user: User = await db.models.User.update(data, {
      where: {
        id,
      },
    });
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getEventsByUser = async (req, res) => {
  try {
    const id: number = req.params.id;
    if (!id) {
      res.status(401).send('User id is required');
    }
    const events: Array<Event> = await db.models.Event.findAll({
      where: {
        user_id: id,
      },
    });
    res.status(200).send(events);
  } catch (e) {
    res.status(500).send(e);
  }
};

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').put(updateUser);
router.route('/:id/getEvents').get(getEventsByUser);

export default router;
