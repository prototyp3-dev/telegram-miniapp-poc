import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        <Section>
          <iframe src="https://app.rives.io/tapes/41f40b5eb8f341f40b5eb8f3cfee7c08a98f4b5604136a67192f277f948ad595" width="100%" height="1080px" />
        </Section>
        <section>
        <iframe id="mainCartridgeFrame" src="https://emulator.rives.io/#simple=true&amp;autoplay=true&amp;cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/freedoom.sqfs&amp;tape=https://raw.githubusercontent.com/edubart/cartridges/main/tapes/freedoom-30min.rivtape&amp;now=1734102341901" scrolling="no" allowfullscreen=""></iframe>
        </section>
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link to="/ton-connect">
            <Cell
              before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
};
