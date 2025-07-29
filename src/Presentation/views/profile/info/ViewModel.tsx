import React from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';

const ProfimeInfoViewModel = () => {
  
    const removeSession = async () => {
        await RemoveUserLocalUseCase();
    }
  
    return {
        removeSession
    }
}

export default ProfimeInfoViewModel;
