import { v4 as uuidv4 } from 'uuid'
import testImage from './image-2.png'
import testImage2 from './image-3.png'

export const mockData = [
  {
    id: uuidv4(),
    name: 'RC Rainbow',
    image: testImage,
    price: '647 000',
    currency: 'uah',
    description: '1 is being built, 1 is build',
  },

  {
    id: uuidv4(),
    name: 'RC Rainbow',
    image: testImage2,
    price: '500 000',
    currency: 'usd',
    description: '1 is being built, 1 is build',
  },
]
