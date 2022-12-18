import { useState } from 'react';
import { useRouter } from 'next/router'

import ResultDetail from '../../components/ResultDetail/index';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function ResultDetailPage() {
  const router = useRouter()
  const { pid } = router.query

  return (
    <main>
      <ResultDetail id={pid} />
    </main>
  )
}

export default ResultDetailPage
