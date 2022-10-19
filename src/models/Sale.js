import { Schema, model, Types, models } from 'mongoose';

const SaleSchema = new Schema(
  {
    _id: { type: String, default: () => nanoid(8) },
    user: { type: Types.ObjectId, ref: 'User' },

    address_1: { type: String, required: true },
    address_2: { type: String },
    zip: { type: String, required: true },
    city: { type: String, required: true },
    county: { type: String, required: true },
    state: { type: String, required: true },

    contents: {
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
  },
  { timestamps: true }
);

const Sale = models.Sale || model('Sale', SaleSchema);

export default Sale;
