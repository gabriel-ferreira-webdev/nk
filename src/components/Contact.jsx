import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        emailjs
            .sendForm('service_0xzo3un', 'template_zmj3379', form.current, {
                publicKey: 'sFPRqTA79mHpZRGS_',
            })
            .then(
                () => {
                    setIsSending(false);
                    setStatus({ type: 'success', message: 'Mensagem enviada com sucesso.' });
                    // optionally clear the form
                    try {
                        form.current.reset();
                    } catch { }
                },
                (error) => {
                    setIsSending(false);
                    setStatus({ type: 'error', message: 'Falha ao enviar a mensagem. Por favor, tente novamente ou com o endereço acima.' });
                },
            );
    }
    return (
        <div id="ct" className="isolate  px-6 py-24 sm:py-32 lg:px-8">
            {/* background gradient blob removed */}
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contato</h2>
                <p className="mt-2 text-lg/8 text-gray-400">(11) 3884-4831<span className="mx-2" aria-hidden="true">&bull;</span>contato@nk.eng.br</p>
            </div>
            <form method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" ref={form} onSubmit={sendEmail}>
                {status && (
                    <div
                        className={`mb-6 rounded-md px-4 py-3 text-sm font-medium ${status.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                            }`}
                        role="status"
                    >
                        {status.message}
                    </div>
                )}
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
                        disabled={isSending}
                        className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${isSending ? 'bg-indigo-300 cursor-wait' : 'bg-indigo-500 hover:bg-indigo-400'
                            }`}
                    >
                        {isSending ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
            </form>
        </div>
    )
}
