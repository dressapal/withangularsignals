import { signal, computed } from "@angular/core";
import { User } from "../interfaces/users";

export const  users = signal<User[]>([])
export const currentPage = signal<number>(1);
export const labelTotalUser = computed(()=> `total de usuarios ${users().length}`)
