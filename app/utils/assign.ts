// https://gitter.im/ngrx/store?at=56e3a054c7364f7926be4c30
export function assign<T, U extends T>(target: U, changes: T): U {
  return Object.assign({}, target, changes);
}
