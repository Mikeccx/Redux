// 数据模型，normalizer使用
import { schema } from "normalizr";
// export const SpaceSchema = new schema.Entity(
//     'wiki',
//     {},
//     {
//       idAttribute: 'uuid',
//     }
//   );

// const admin = new schema.Entity('admin')
// const spaceCategory = new schema.Entity('spaceCategory')
// export const SpaceSchema = new schema.Entity('spaces', {
//     admins: [admin],
//     spaceCategory: [spaceCategory]
// },{
//     idAttribute: 'uuid'
// })
// const space = new schema.Entity('spaces');
// export const SpaceSchema1 = new schema.Object({ spaces: new schema.Array(space) })
// export const SpaceSchema = new schema.Entity('space',
//     {
//     }, {
//         idAttribute: 'uuid'
//     })

const space = new schema.Entity('space', {}, {
idAttribute: 'uuid'
})
export   const SpaceSchema = new schema.Entity(
    'spaces',
    {
        spaces: [space]
    }
);
