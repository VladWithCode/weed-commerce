import { model, models, Schema } from 'mongoose';

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 30,
  },
  count: { type: Number, default: 0 },
  products: { type: [Schema.Types.ObjectId], ref: 'Product' },
});

const Category = models.Category || model('Category', CategorySchema);

export default Category;
