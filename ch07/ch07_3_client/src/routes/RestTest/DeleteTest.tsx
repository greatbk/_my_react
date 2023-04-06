import {useState, useCallback} from 'react'
import {del, post} from '../../server'
import * as D from '../../data/Card'

export default function CopyMe() {
  const [data, setData] = useState<object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const deleteTest = useCallback(() => {
    del('/test/1234')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  }, [])

  return (
    <div className="mb-4">
      <div className="flex justify-center mb-4">
        <button onClick={deleteTest} className="btn btn-primary">
          DELETE id 1234
        </button>
      </div>
      <div className="mt-4 text-center">
        <p>data: {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error: {errorMessage}</p>}
      </div>
    </div>
  )
}
