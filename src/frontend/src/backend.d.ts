import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface Appointment {
    id: bigint;
    serviceType: string;
    message: string;
    preferredDate: string;
    patientName: string;
    phoneNumber: string;
}
export interface backendInterface {
    bookAppointment(patientName: string, phoneNumber: string, preferredDate: string, serviceType: string, message: string): Promise<bigint>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAllContactSubmissions(): Promise<Array<ContactFormSubmission>>;
    submitContactForm(name: string, phone: string, email: string, message: string): Promise<void>;
}
