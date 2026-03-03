import { Aside } from './components/Aside'
import { Container } from './components/Container'
import { Main } from './components/Main'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'
import Card from './components/Card'
import { DailyBudget } from './components/DailyBudget'
import { SavingStatus } from './components/SavingsStatus'
import styles from './app.module.css'


function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
        <SearchInput />
        <div>
          <Typography variant="h1">
            Olá, Levi!
          </Typography>
          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>

        <section className={styles.grid}>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              <DailyBudget value={250} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Progresso da meta financeira
            </Card.Header>
            <Card.Body>
              <SavingStatus percent={42} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Movimentação financeira
            </Card.Header>
            <Card.Body>
              R$ 200
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Minhas contas
            </Card.Header>
            <Card.Body>
              <p>R$ 200</p>
              <p>R$ 200</p>
              <p>R$ 200</p>
              <p>R$ 200</p>
              <p>R$ 200</p>
              <p>R$ 200</p>
              <p>R$ 200</p>
              <p>R$ 200</p>
            </Card.Body>
          </Card>

        </section>
      </div>
    </Main>
    </Container >
  )
}

export default App
