import React from 'react'

import { useForm } from 'react-hook-form'

export const AwesomeInput = () => {

   const { 
      register, 
      handleSubmit, 
      formState: { errors }, 
      reset 
   } = useForm({
      mode: 'onChange'
   })

   const onSubmit = data => {
      reset()
   }

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               {...register('name',
               {
                  required: 'name is require field!'
               })}
               placeholder="name"
            />
            {errors?.name && (
               <div style={{color: 'red'}}>{errors.name.message}</div>
            )}

            <input
               {...register('email',
               {
                  required: 'email is require field!',
                  pattern: {
                     
                     value: 
                     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                     message: 'enter valid email'
                  }
               })}
               placeholder="email"
            />
            {errors?.email && (
               <div style={{color: 'red'}}>{errors.email.message}</div>
            )}
            <button>send</button>
         </form>
      </div>
   )
}
