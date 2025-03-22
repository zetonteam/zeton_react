import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/atoms/Loading/Loading';
import { useAwards } from '../../api/Award/useAwards';
import AwardsContainer from './AwardsContainer';
import AwardsList from './AwardsList';

const Awards = () => {
  const { id } = useParams();
  const { awards, isAwardsLoading, isAwardsError } = useAwards(id);

  if (isAwardsLoading)
    return (
      <AwardsContainer>
        <Loading />
      </AwardsContainer>
    );

  if (isAwardsError)
    return (
      <AwardsContainer>
        <div>
          Wystąpił błąd podczas wczytywania danych, proszę odświeżyć stronę.
        </div>
      </AwardsContainer>
    );

  return (
    <AwardsContainer>
      {awards ?
      <AwardsList awards={awards} />
      :
      <div> Brak nagród. </div>
      }
    </AwardsContainer>
  );
};

export default Awards;
