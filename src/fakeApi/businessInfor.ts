import { Location } from '../models/businessInfor'

export function fetchLocation(locations: Location[]) {
  return new Promise<Location[]>((resolve) => {
    setTimeout(() => resolve(locations), 1000)
  })
}

export function postLocation(location: Location) {
  return new Promise<Location>((resolve) => {
    setTimeout(() => resolve(location), 1000)
  })
}

export function putLocation(location: Location) {
  return new Promise<Location>((resolve) => {
    setTimeout(() => resolve(location), 1000)
  })
}

export function deleteLocationApi(location:Location) {
  return new Promise<Location>((resolve) => {
    setTimeout(() => resolve(location), 1000)
  })
}
