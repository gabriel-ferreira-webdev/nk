import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
const features = [
    {
        name: 'Consultoria Estratégica',
        description:
            'Consultoria e Engenharia, Consultoria Técnica, Estudos de viabilidade técnica e econômica, Avaliação de Ativos (Impairment) para Concessionárias',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Estudos de Tráfego',
        description:
            'Estudos de tráfego, Elaboração de estudo de tráfego, Estudos de tráfego das faixas adicionais',
        icon: LockClosedIcon,
    },
    {
        name: 'Planejamento Rodoviário',
        description:
            'Estudos de previsão de demanda para rodovias, Soluções completas para o desenvolvimento de projetos de infraestrutura em transporte',
        icon: ArrowPathIcon,
    },
    {
        name: 'Monitoramento e Levantamentos Técnicos',
        description:
            'Monitoração operacional de rodovias, Estudos e Levantamentos Técnicos de Radares',
        icon: FingerPrintIcon,
    },
]

export default function Services() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    {/* <h2 className="text-base/7 font-semibold text-indigo-400">Deploy faster</h2> */}
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        Nossos Serviços
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-300">
                        Com uma equipe altamente qualificada, atuamos em todas as etapas do desenvolvimento de projetos, desde estudos iniciais até a implementação de soluções técnicas que atendem às demandas mais complexas do setor.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-white">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>

    );
}