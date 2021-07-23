interface MapPick {
  <T>(arr: T[], key: keyof T): T[keyof T][]
  wait<T>(arr: T[]): (key: keyof T) => T[keyof T][]
  curry<Key extends string>(key: Key): <Obj extends Record<Key, any>>(arr: Obj[]) => Obj[keyof Obj][]
}

const mapPick: MapPick = (arr, key) => arr.map(it => it[key]);
mapPick.wait = arr => key => arr.map(it => it[key]);
mapPick.curry = key => arr => arr.map(it => it[key]);

export default mapPick;