/* eslint-disable import/no-absolute-path */
import React, {
  useEffect,
  useState
} from 'react'

type Props = {
  title?: string,
  children?: React.ReactNode
}

function Section (props: Props = {}) {
  const { title, children } = props
  return (
    <section>
      {title && (<h2>{title}</h2>)}
      {children}
    </section>
  )
}

function Component () {
  const [counter, setCounter] = useState<number>(0)

  const handleClick = () => {
    setCounter(value => value + 1)
    // document.title = counter.toString() // Bad solution. Solution: useEffect
  }

  useEffect(() => { // Correct solution
    document.title = counter.toString()
  }, [counter])

  const getSection = ({ title }: Props = {}) => (
    <section style={{ borderStyle: 'solid' }}>
      {title && (<h2>{title}</h2>)}
      <strong>Forma incorrecta de cargar un componente</strong>
    </section>
  )
  return (
    <>
      <main>
        <h1>useEffect: cuidado con los efectos</h1>

        {getSection({ title: 'Ejemplo' })}

        <Section title='useEffect'>
          <blockquote>
            When a component renders, it should do so without running into any side effects
          </blockquote>
          <Section>
            <h3>Output: Barra de título (useEffect)</h3>
            <button onClick={handleClick}> +1 </button>
          </Section>
        </Section>

      </main>
    </>
  )
}

export default Component
