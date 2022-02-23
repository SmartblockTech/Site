import { Container, Row, Col } from 'react-bootstrap';
import { Smartblock } from 'types';
import Layout from 'components/utils/layout';
import { ProvidersHelper } from 'helpers/providers';
import { useState, useLayoutEffect } from 'react';
import { marked } from 'marked';
import SuspenseFallback from 'components/utils/suspense-fallback';

const TermsOfService: Smartblock.Types.IsolatedComponent = (): JSX.Element => {

  const [remoteFile, setRemoteFile] = useState<string>();

  useLayoutEffect(() => {
    ProvidersHelper.HttpClient.get<string>('https://static-content.smartblock.cl/terms-of-service.md', {
      headers: { Accept: 'text/markdown' }
    }).then(result => { setRemoteFile(result.data); });
  }, []);

  return (
    <Layout pageTitle='Términos y condiciones de servicio'>
      <Container className='my-5'>
        <Row>
          <Col>
            {
              typeof remoteFile === 'string'
                ? <article dangerouslySetInnerHTML={{__html: marked(remoteFile)}}></article>
                : SuspenseFallback(String(), {
                  useRelativeHeight: true
                })
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default TermsOfService;
