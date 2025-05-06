import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

// Definição dos tipos
interface FormData {
    name: string;
    phone: string;
    treatment: string;
    message: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    treatment?: string;
    message?: string;
}

interface ScheduleItem {
    day: string;
    hours: string;
    closed?: boolean;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        treatment: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});

    // Função para atualizar os valores do formulário
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Validação específica para cada campo
        if (name === 'name') {
            // Permite apenas letras, espaços e alguns caracteres especiais para nomes compostos
            if (value === '' || /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'.,-]+$/.test(value)) {
                setFormData({ ...formData, [name]: value });
                setErrors({ ...errors, [name]: '' });
            }
        } else if (name === 'phone') {
            // Permite apenas números no campo de telefone
            if (value === '' || /^\d*$/.test(value)) {
                setFormData({ ...formData, [name]: value });
                setErrors({ ...errors, [name]: '' });
            }
        } else {
            setFormData({ ...formData, [name]: value });
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Função para validar o formulário antes de enviar
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Nome é obrigatório';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefone é obrigatório';
        } else if (formData.phone.length < 10) {
            newErrors.phone = 'Telefone deve ter pelo menos 10 dígitos';
        }

        if (!formData.treatment) {
            newErrors.treatment = 'Selecione um tratamento';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            // Número do WhatsApp da clínica
            const phoneNumber = "5511981002310"; // Substitua pelo número do WhatsApp da clínica

            // Montar mensagem
            const message = `Olá! Meu nome é ${formData.name}. 
Telefone: ${formData.phone}
Tratamento: ${formData.treatment}
Mensagem: ${formData.message}`;

            // Codificar a mensagem para URL
            const encodedMessage = encodeURIComponent(message);

            // Criar link do WhatsApp
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Abrir WhatsApp em nova aba
            window.open(whatsappLink, '_blank');

            // Limpar formulário após envio
            setFormData({
                name: '',
                phone: '',
                treatment: '',
                message: ''
            });
        }
    };

    // Array com os horários de funcionamento
    const scheduleItems: ScheduleItem[] = [
        { day: 'Segunda-feira', hours: '08:00  – 19:00' },
        { day: 'Terça-feira', hours: '08:00  – 19:00' },
        { day: 'Quarta-feira', hours: '08:00  – 19:00' },
        { day: 'Quinta-feira', hours: '08:00  – 19:00' },
        { day: 'Sexta-feira', hours: '08:00  – 19:00' },
        { day: 'Sabádo', hours: '08:00  – 14:00' },
        { day: 'Domingo', hours: 'Fechado', closed: true }
    ];

    return (
        <section id='contato' className=''>
            <div className='flex flex-col lg:flex-row'>
                {/* Horários de Funcionamento */}
                <article className='bg-[#F6F9F9] py-20 w-full flex justify-center lg:w-1/2'>
                    <div className='w-3/5'>
                        <h1 className='text-2xl font-semibold text-gray-800'>
                            Horário de <span className='text-cyan-500'>funcionamento</span>
                        </h1>
                        <ul className='mt-5 space-y-2 text-gray-600'>
                            {scheduleItems.map((item, index) => (
                                <li key={index} className='flex justify-between border-b pb-1'>
                                    <span className='font-semibold'>{item.day} :</span>
                                    <span className={item.closed ? 'text-red-500' : ''}>{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>

                {/* Formulário */}
                <article className='bg-cyan-100 py-20 w-full flex justify-center lg:w-1/2'>
                    <div className='w-3/5'>
                        <h1 className='text-2xl font-semibold text-gray-800'>
                            Faça uma <span className='text-cyan-500'>avaliação</span>
                        </h1>
                        <form className='mt-5 space-y-4' onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Seu nome'
                                    className='border-b-2 bg-transparent border-cyan-500 p-2 w-full outline-none'
                                />
                                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                            </div>

                            <div>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='Seu telefone'
                                    className='border-b-2 bg-transparent border-cyan-500 p-2 w-full outline-none'
                                />
                                {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
                            </div>

                            <div className="relative w-full">
                                <select
                                    className="border-b-2 bg-transparent border-cyan-500 p-2 w-full appearance-none cursor-pointer outline-none pr-10"
                                    name="treatment"
                                    value={formData.treatment}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Selecione um tratamento</option>
                                    <option value="Avaliação">Avaliação</option>
                                    <option value="Ortodontia e Ortopedia / Aparelho">Ortodontia e Ortopedia / Aparelho</option>
                                    <option value="Clínica geral">Clínica geral</option>
                                    <option value="Clareamento dentário">Clareamento dentário</option>
                                    <option value="Atendimento infantil">Atendimento infantil</option>
                                    <option value="Implante">Implante</option>
                                    <option value="Laserterapia">Laserterapia</option>
                                    <option value="Próteses">Próteses</option>
                                    <option value="Endodontia / Canal">Endodontia / Canal</option>
                                    <option value="Estética">Estética</option>
                                </select>
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl pointer-events-none">
                                    <MdArrowDropDown />
                                </div>
                                {errors.treatment && <p className='text-red-500 text-sm mt-1'>{errors.treatment}</p>}
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Sua mensagem'
                                    rows={3}
                                    className='w-full border-b-2 bg-transparent outline-none border-cyan-500 resize-none p-2'
                                />
                            </div>

                            <button
                                type="submit"
                                className='border-2 border-gray-800 px-5 py-2 mt-4 uppercase hover:bg-gray-800 hover:text-white transition-colors'
                            >
                                Ver disponibilidade
                            </button>
                        </form>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Contact;