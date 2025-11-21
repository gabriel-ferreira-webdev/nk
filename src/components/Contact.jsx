import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0xzo3un', 'template_zmj3379', form.current, {
                publicKey: 'sFPRqTA79mHpZRGS_',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }
    return (
        <div id="ct" className="isolate  px-6 py-24 sm:py-32 lg:px-8">
            {/* background gradient blob removed */}
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contato</h2>
                {/* <p className="mt-2 text-lg/8 text-gray-400">(11) 3884-4831 |
                    contato@nk.eng.br</p> */}
            </div>
            <form method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                            Seu Nome
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="user_name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                            Seu Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="user_email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                            Mensagem
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                defaultValue={''}
                            />
                        </div>
                    </div>

                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}
