import Text "mo:core/Text";
import Array "mo:core/Array";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Appointment = {
    id : Nat;
    patientName : Text;
    phoneNumber : Text;
    preferredDate : Text;
    serviceType : Text;
    message : Text;
  };

  type ContactFormSubmission = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  let appointments = List.empty<Appointment>();
  let contactSubmissions = List.empty<ContactFormSubmission>();
  var nextAppointmentId = 0;

  public shared ({ caller }) func bookAppointment(patientName : Text, phoneNumber : Text, preferredDate : Text, serviceType : Text, message : Text) : async Nat {
    let appointment : Appointment = {
      id = nextAppointmentId;
      patientName;
      phoneNumber;
      preferredDate;
      serviceType;
      message;
    };
    appointments.add(appointment);
    nextAppointmentId += 1;
    appointment.id;
  };

  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, message : Text) : async () {
    let submission : ContactFormSubmission = {
      name;
      phone;
      email;
      message;
    };
    contactSubmissions.add(submission);
  };

  public shared ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.toArray();
  };

  public shared ({ caller }) func getAllContactSubmissions() : async [ContactFormSubmission] {
    contactSubmissions.toArray();
  };
};
