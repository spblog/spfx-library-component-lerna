import * as React from 'react';
import styles from './OrgApp.module.scss';
import { IOrgAppProps } from './IOrgAppProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { UtilsLibrary } from "spfx-utils";

export default class OrgApp extends React.Component<IOrgAppProps, {}> {
  public render(): React.ReactElement<IOrgAppProps> {
    const lib = new UtilsLibrary();

    const libName = lib.name();

    return (
      <div className={ styles.orgApp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>{libName}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
