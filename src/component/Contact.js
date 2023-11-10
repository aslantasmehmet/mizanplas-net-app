import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const senderName = form.current.user_name.value; // get the sender's name from the form
    emailjs
      .sendForm(
        "service_n2aqoj2",
        "template_ko95ch2",
        form.current,
        "jsXyZrH3WZM2EFnmF"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            `Sayın ${senderName}, mesajınız başarıyla iletildi. Kısa süre içerisinde yetkililerimiz sizinle iletişime geçecektir.`
          );
        },
        (error) => {
          console.log(error.text);
          toast.error(
            `Sayın ${senderName}, Mesajınız iletilemedi! Kontrol ederek tekrar deneyiniz.`
          );
        }
      );
  };

  return (
    <div>
      <Toaster toastOptions={{ duration: 10000 }} />

      <div class="font-normal font-display2 text-5xl text-black mb-10 mt-16">
        Bize Ulaşın
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:container md:mx-auto  contact">
          <div class="flex flex-col">
            <input
              name="user_name"
              type="text"
              placeholder="Adınız *"
              class="border shadow w-full h-10 focus:outline-none rounded my-3 placeholder:text-md placeholder:font-display2"
            />
            <input
              name="user_subject"
              type="text"
              placeholder="Konu *"
              class="border shadow w-full h-10 focus:outline-none rounded mb-3 placeholder:text-md placeholder:font-display2"
            />
            <input
              name="user_email"
              type="text"
              placeholder="E-Mail *"
              class="border shadow w-full h-10 focus:outline-none rounded mb-3 placeholder:text-md placeholder:font-display2"
            />
            <input
              name="user_phone"
              type="text"
              placeholder="Telefon Numaranız *"
              class="border shadow w-full h-10 focus:outline-none rounded mb-8 placeholder:text-md placeholder:font-display2"
            />
          </div>

          <div class="flex flex-col">
            <textarea
              name="message"
              class="border shadow rounded w-full h-40 my-3 focus:outline-none placeholder:text-md placeholder:font-display2"
              placeholder="Mesajınız..."
            ></textarea>
            <div class="flex items-center my-3">
              <input
                type="checkbox"
                required
                class="-translate-y-6 checked:bg-green-900 mt-3"
              />
              <label
                htmlFor="privacy"
                class="ml-2 mt-4 text-lg text-left font-normal text-black font-display -translate-y-6"
              >
                <a href="/gizlilik-politikası" className="text-blue-500">Gizlilik politikasını</a> okudum, onaylıyorum.
              </label>
            </div>{" "}
          </div>
        </div>
        <button
          type="submit"
          className=" bg-green-900 hover:bg-black text-white font-display2 py-3 px-10 rounded transition duration-500 ease-in-out transform hover:scale-110"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
