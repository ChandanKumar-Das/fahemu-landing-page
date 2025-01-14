import React from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const countryOptions = [
  { value: '+1', label: 'USA (+1)' },
  { value: '+44', label: 'UK (+44)' },
  { value: '+91', label: 'India (+91)' },
  
];

export function Form () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
<div className="w-full pb-20">
          <div className="pt-10 max-w-[1100px] mx-auto">
            <h1 className="font-bold text-4xl pb-4 ">6. Kontaktinformationen</h1>
            <p className="text-[20px] leading-inherit text-[#737679] font-normal font-outfit m-0 p-0 ">
            Wir senden dir Angebote per E-Mail zu. Deine Kontaktinformationen bleiben vertraulich und werden nur für Safari-Angebote in Tansania verwendet.
            </p>
     
  

        <div className='max-w-[500px] mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-4">
            <label className="block font-semibold mb-1">Voller Name (Bitte gib deinen Vor- und Nachnamen an)</label>
            <input
              type="text"
              placeholder="Voller Name"
              className="w-full border border-gray-300 p-3 rounded-md"
              {...register('name', { required: 'Name is requir' })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          
          <div className="mb-4">
            <label className="block font-semibold mb-1">Email (Wir senden unsere Angebote an die von dir angegebene E-Mail-Adresse)</label>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border border-gray-300 p-3 rounded-md"
              {...register('email', {
                required: 'Email is requir',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ungültige Email-Adresse',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

         
          <div className="mb-4">
            <label className="block font-semibold mb-1">Telefonnummer (Bitte gib auch die internationale Landesvorwahl an)(optional)</label>
            <div className="flex">
              <div className="w-2/5 mr-2">
                <Select
                  options={countryOptions}
                  placeholder="-Country Code-"
                  onChange={(option) => setValue('countryCode', option.value)}
                />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-3/5 border border-gray-300 p-3 rounded-md"
                {...register('phone')}
              />
            </div>
          </div>

         
         

          
          <div className="bg-green-100 border-l-4 border-green-800   text-green-900 p-4 rounded-md mb-4">

         <div className='flex gap-2'>
          <div role="img" aria-label="lock">🔒</div> 
            <p >
              Deine Handynummer ist bei uns sicher und wird nur für die Kommunikation in Zusammenhang mit deiner Buchungsanfrage verwendet.
            </p>
          </div>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Zusätzliche Informationen (optional)</label>
            <textarea
              placeholder="Alle zusätzlichen Angaben zu deiner Tour helfen uns dabei ..."
              className="w-full border border-gray-300 p-3 rounded-md"
              {...register('additionalInfo')}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#8B572A] text-white p-3 rounded-md font-semibold hover:bg-black"
          >
            SENDE MIR EIN ANGEBOT
          </button>
        </form>
        </div>

      </div>
    </div>
   
  );
};


