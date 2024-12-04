export type UserLoginType = {
    email: string;
    password: string;
    [key: string]: string | undefined; // Pour l'objet errors qui peut contenire une cle (number) et l'erreur
}
