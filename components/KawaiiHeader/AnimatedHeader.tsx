import React from 'react'
import { Header, Transition } from 'semantic-ui-react'

import {Arepa} from '@components/SVGIcons'

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
}

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <Header size="huge" as="h1" onClick={onClick}>
    Are
    <Transition
      animation="jiggle"
      visible={visible}
      duration={900}
      onComplete={onComplete}
    >
      <Arepa size="58px" />
    </Transition>
    Passion
  </Header>
)

export default AnimatedHeader;
