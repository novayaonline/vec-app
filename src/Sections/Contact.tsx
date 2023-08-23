//Imports
import './Styles/contact.style.css';
import { useState } from 'react';

//Configs
const linkToFetch = 'https://formsubmit.co/felipemaifredo@gmail.com';

const Contact = () => {
    const [btnText, SetBtnText] = useState('Enviar');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        text: ''
    });

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  

        if ( !formData.name || !formData.email || !formData.subject || !formData.text ) {
            SetBtnText('Preencha todos os campos acima');
            setTimeout( () => {
                SetBtnText('Enviar');
            }, 3000);
          } else {
            SetBtnText('Enviando...');
            fetch(linkToFetch, {
              method: 'post',
              headers: { 'Accept': 'aplication/json', 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                _captcha: 'false',
                _subject: 'Novo Contato no Site!',
                Nome: formData.name,
                Email: formData.email,
                Assunto: formData.subject,
                Texto: formData.text
              })
            }).then(() => {
              SetBtnText('Mensagem enviada!');
              setTimeout(() => {
                clearForm();
              }, 5000);
            });
        }; 
    };

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            text: '',
        });
        SetBtnText('Enviar');
    };

    return (
        <section id="contact">
            <p>Possui alguma dúvida?</p>
            <h2>Não hesite em entrar em contato conosco, preencha o formulário abaixo.</h2>
            <form id='form-contact' onSubmit={ sendEmail }  >
                <div className='form-nameandemail'>
                    <input type='text' placeholder='Nome' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <input type='email' placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <input type='text' placeholder='Assunto' value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                <textarea placeholder='Digite sua mensagem' value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} ></textarea>
                <div className='btn-box-form'>
                    <button type='submit' id='formBtn' className='button-style'>{btnText}</button>
                </div>
            </form>
        </section>
    )
}

export default Contact