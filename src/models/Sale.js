import { Schema, model, Types, models } from 'mongoose';

const SaleSchema = new Schema(
  {
    id: { type: String, default: () => nanoid(8) },
    user: { type: Types.ObjectId, ref: 'User' },
    userData: {
      type: new Schema({
        fullname: { type: String, required: true },
        phone: { type: String },
        email: { type: String, required: true },
      }),
    },

    street: { type: String, required: true },
    num: { type: String, required: true },
    intNum: { type: String },
    col: { type: String },
    zip: { type: String, required: true },
    refs: { type: String, maxlength: 160 },
    city: { type: String, required: true },
    state: { type: String, required: true },
    // country: { type: String, required: true },

    items: {
      type: [
        new Schema({
          product: { type: Types.ObjectId, ref: 'Product', required: true },
          qty: { type: Number, default: 1 },
          total: { type: Number, required: true },
        }),
      ],
    },
    subtotal: { type: Number },
    shipping: { type: Number, default: 0 },
    total: { type: Number },
    paid: { type: Boolean, default: false },
    paidAt: { type: Date },

    paymentData: {
      type: new Schema(
        {
          id: { type: String },
          method: { type: String },
        },
        { _id: false }
      ),
      select: false,
    },
    transferData: {
      type: new Schema(
        {
          transferNumbers: { type: [String] },
        },
        { _id: false }
      ),
    },
    earnings: { type: Number, select: false },
  },
  { timestamps: true, _id: false }
);

const Sale = models.Sale || model('Sale', SaleSchema);

export default Sale;
