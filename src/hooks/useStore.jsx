import { nanoid } from 'nanoid';
import create from 'zustand';


export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: [],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes, {
          key: nanoid(),
          position: [x, y, z],
          texture: prev.texture,
        }
      ]
    }))
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter(cube => {
        const [X, Y, Z] = cube.position;
        return X !== x || Y !== y || Z !== z
      })
    }))
  },
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}))