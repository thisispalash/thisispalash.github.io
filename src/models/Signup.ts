import mongoose from 'mongoose';

export type Action = {
  kind: string;
  timestamp: Date;
}

export type Signup = {
  _id: mongoose.Schema.Types.ObjectId;
  source: string;
  confirmed: boolean;
  active: boolean;
  email: string;
  sent: boolean;
  dateCreated: Date;
  dateUpdated: Date;
  actions: Array<Action>;
}

const SignupSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  source: String,
  confirmed: Boolean,
  active: Boolean,
  email: String,
  sent: Boolean,
  dateCreated: Date,
  dateUpdated: Date,
  actions: Array<Action>,
});

export default mongoose.models.Signup || mongoose.model('Signup', SignupSchema);


/* Methods (return promises, have to be waited upon) */

function _asyncUpdate(_id: string, _data: Signup) {
  return mongoose.models.Signup.findOneAndUpdate({ _id }, _data, { new: true });
}

export async function asyncConfirmSignup(_id: string) {

  const signup = await mongoose.models.Signup.findOne({ _id });
  
  const action = {
    kind: 'confirm',
    timestamp: new Date()
  }

  return _asyncUpdate(_id, 
    { 
      ...signup,
      confirmed: true, 
      active: true, 
      dateUpdated: action.timestamp, 
      actions: [...signup.actions, action]
    }
  );
}

export async function asyncToggleActiveStatus(_id: string) {

  const signup = await mongoose.models.Signup.findOne({ _id });

  const action = {
    kind: signup.active? 'unsubscribe' : 'resubscribe',
    timestamp: new Date()
  }

  return _asyncUpdate(_id,
    {
      ...signup,
      active: !signup.active,
      dateUpdated: action.timestamp,
      actions: [...signup.actions, action]
    }
  );
}

export function asyncNewSignup(_data: Partial<Signup>, _src: string) {

  const action: Action = {
    kind: 'create',
    timestamp: new Date(),
  }
  
  return mongoose.models.Signup.create({
    _id: new mongoose.Types.ObjectId(),
    source: _src,
    confirmed: false,
    active: false,
    email: _data.email,
    sent: false,
    dateCreated: action.timestamp,
    dateUpdated: action.timestamp,
    actions: [action],
  });
}