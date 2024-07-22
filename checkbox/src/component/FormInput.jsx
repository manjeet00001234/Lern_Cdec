import React from 'react'
import FormLable from './FormLable';
import { Checkbox } from 'primereact/checkbox';

const FormInput = ({ fild, func, val }) => {

  return (
       <div>
            <FormLable name={fild.name} title={fild.title}>
                 {fild.type === "check" ? (
                      <div
                      className="d-flex align-items-center gap-2">
                      {fild.game.map((game) => {
                          return (
                               <div className='d-flex gap-2'>
                                    <Checkbox
                                         inputId={game.key}
                                         name={fild.name}
                                         value={game.value}
                                         onChange={func}
                                        //   checked={val?.[fild.name]?.some(
                                        //        (item) =>
                                        //             item === game.value
                                        //   )}
                                         checked={val?.[fild.name]?.includes(
                                              game.value
                                         )}
                                    />
                                    <label htmlFor={game.key} className="ml-2">
                                         {game.value}
                                    </label>
                               </div>
                          );
                      })}

                      </div>
                 ) : null}
            </FormLable>
       </div>
  );
}

export default FormInput